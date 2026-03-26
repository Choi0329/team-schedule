// 팀 일정 관리 - 비밀번호 보호
// 비밀번호: mediaspace2026

(function() {
    const PASSWORD = atob('bWVkaWFzcGFjZTIwMjY='); // base64 인코딩
    const SESSION_KEY = 'team_auth_session';
    const SESSION_DURATION = 8 * 60 * 60 * 1000; // 8시간

    function checkSession() {
        try {
            const session = JSON.parse(localStorage.getItem(SESSION_KEY));
            if (session && session.token === btoa(PASSWORD) && (Date.now() - session.time) < SESSION_DURATION) {
                return true;
            }
        } catch {}
        return false;
    }

    function saveSession() {
        localStorage.setItem(SESSION_KEY, JSON.stringify({ token: btoa(PASSWORD), time: Date.now() }));
    }

    if (checkSession()) return;

    document.documentElement.style.visibility = 'hidden';

    window.addEventListener('DOMContentLoaded', function() {
        document.body.style.visibility = 'visible';
        document.body.innerHTML = `
        <div style="
            position:fixed; top:0; left:0; right:0; bottom:0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display:flex; justify-content:center; align-items:center;
            font-family: 'Segoe UI', 'Malgun Gothic', sans-serif;
            z-index: 99999;
        ">
            <div style="
                background:white; border-radius:16px; padding:40px;
                width:360px; max-width:90vw; text-align:center;
                box-shadow: 0 8px 32px rgba(0,0,0,0.15);
            ">
                <div style="font-size:48px; margin-bottom:16px;">🔒</div>
                <h2 style="color:#333; margin-bottom:8px;">접근 제한</h2>
                <p style="color:#888; font-size:14px; margin-bottom:24px;">비밀번호를 입력하세요</p>
                <input type="password" id="authPass" placeholder="비밀번호" style="
                    width:100%; padding:12px 16px; border:2px solid #e9ecef;
                    border-radius:10px; font-size:15px; outline:none;
                    margin-bottom:12px; text-align:center;
                " onkeydown="if(event.key==='Enter') document.getElementById('authBtn').click()">
                <button id="authBtn" style="
                    width:100%; padding:13px; background:linear-gradient(135deg,#667eea,#764ba2);
                    color:white; border:none; border-radius:10px;
                    font-size:16px; font-weight:600; cursor:pointer;
                ">확인</button>
                <p id="authError" style="color:#dc3545; font-size:13px; margin-top:12px; display:none;">
                    비밀번호가 틀렸습니다
                </p>
            </div>
        </div>`;

        document.getElementById('authPass').focus();
        document.getElementById('authBtn').addEventListener('click', function() {
            const input = document.getElementById('authPass').value;
            if (input === PASSWORD) {
                saveSession();
                location.reload();
            } else {
                document.getElementById('authError').style.display = 'block';
                document.getElementById('authPass').value = '';
                document.getElementById('authPass').focus();
            }
        });
    });
})();
