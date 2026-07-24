const sections = [
  ["overview", "政策摘要"],
  ["collection", "我們處理的資料"],
  ["purpose", "使用目的"],
  ["storage", "儲存與分享"],
  ["third-party", "第三方服務"],
  ["rights", "您的權利"],
  ["contact", "聯絡我們"],
] as const;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="長照個管系統首頁">
            <span className="brand-mark" aria-hidden="true">LT</span>
            <span>
              <strong>長照個管系統</strong>
              <small>Long-Term Care Manager</small>
            </span>
          </a>
          <a className="contact-link" href="mailto:alexsystem995@gmail.com">
            聯絡我們
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-inner">
          <div className="eyebrow">PRIVACY POLICY</div>
          <h1>隱私權政策</h1>
          <p className="hero-lead">
            我們珍視每一筆照護紀錄，也重視您對資料的掌控。
            本政策說明長照個管系統如何處理、保存與保護您的資訊。
          </p>
          <div className="hero-meta">
            <span>生效日期：2026 年 7 月 25 日</span>
            <span className="meta-divider" aria-hidden="true" />
            <span>適用版本：1.0 以上</span>
          </div>
        </div>
      </section>

      <div className="page-shell">
        <aside className="toc" aria-label="頁面目錄">
          <p>本頁內容</p>
          <nav>
            {sections.map(([id, label], index) => (
              <a href={`#${id}`} key={id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="policy">
          <section id="overview" className="policy-section intro-section">
            <div className="section-number">01</div>
            <div>
              <p className="section-kicker">政策摘要</p>
              <h2>您的資料，主要留在您的裝置上</h2>
              <p>
                長照個管系統是一套協助使用者管理照會、轉介、輔具評估與追蹤時程的工具。
                App 目前不設置廣告、不使用第三方廣告追蹤器，也不會將個案資料出售給任何人。
                使用者建立的服務紀錄儲存在其裝置的本機資料庫中。
              </p>
              <div className="summary-grid">
                <div className="summary-card">
                  <span className="summary-icon" aria-hidden="true">01</span>
                  <strong>本機優先</strong>
                  <p>個案與追蹤紀錄預設保存在您的裝置。</p>
                </div>
                <div className="summary-card">
                  <span className="summary-icon" aria-hidden="true">02</span>
                  <strong>由您決定分享</strong>
                  <p>備份僅在您主動匯出或分享時離開 App。</p>
                </div>
                <div className="summary-card">
                  <span className="summary-icon" aria-hidden="true">03</span>
                  <strong>沒有廣告追蹤</strong>
                  <p>我們不以廣告或跨站追蹤為目的使用資料。</p>
                </div>
              </div>
            </div>
          </section>

          <section id="collection" className="policy-section">
            <div className="section-number">02</div>
            <div>
              <p className="section-kicker">資料類型</p>
              <h2>我們處理的資料</h2>
              <p>
                依您實際使用的功能，App 可能處理以下由您輸入或建立的資訊：
              </p>
              <ul className="detail-list">
                <li>
                  <strong>個案識別與聯絡資料</strong>
                  <span>個案姓名、身分證字號、聯絡電話。</span>
                </li>
                <li>
                  <strong>長照服務與追蹤紀錄</strong>
                  <span>照會日期、轉介單位、評估日期、追蹤日期、聯絡結果、服務狀態、輔具類型與備註。</span>
                </li>
                <li>
                  <strong>App 偏好設定</strong>
                  <span>追蹤天數、提醒設定及排程通知識別碼。</span>
                </li>
                <li>
                  <strong>帳號基本資料（如啟用登入）</strong>
                  <span>姓名、電子郵件、頭像網址及登入方式。若以訪客模式使用，則無須提供登入資料。</span>
                </li>
              </ul>
              <div className="notice">
                <strong>重要提醒</strong>
                <p>
                  App 可能包含敏感個人資料。請僅在具備合法權限與照護業務需求時輸入，
                  並妥善管理裝置密碼、備份檔案及分享對象。
                </p>
              </div>
            </div>
          </section>

          <section id="purpose" className="policy-section">
            <div className="section-number">03</div>
            <div>
              <p className="section-kicker">處理目的</p>
              <h2>資料如何被使用</h2>
              <p>上述資料僅用於提供與維護 App 的核心功能，包括：</p>
              <ul>
                <li>建立、查閱、修改與管理長照服務個案紀錄；</li>
                <li>計算照會、轉介及輔具案件的預定追蹤日期；</li>
                <li>依使用者設定，在裝置上排程追蹤提醒；</li>
                <li>產生由使用者主動匯出、保存或分享的 JSON 備份檔；</li>
                <li>維持登入狀態與個人化偏好（如相關功能已啟用）；</li>
                <li>回覆障礙申告、技術支援或隱私相關詢問。</li>
              </ul>
              <p>
                我們不會將個案資料用於廣告投放、使用者輪廓分析或出售資料。
              </p>
            </div>
          </section>

          <section id="storage" className="policy-section">
            <div className="section-number">04</div>
            <div>
              <p className="section-kicker">保存與安全</p>
              <h2>資料儲存、備份與分享</h2>
              <h3>裝置本機儲存</h3>
              <p>
                個案資料及設定主要存放在 App 的本機 SQLite 資料庫與裝置儲存空間。
                資料會保留至您在 App 中刪除、清除 App 資料或移除 App 為止；實際結果可能受裝置作業系統的備份與還原設定影響。
              </p>
              <h3>由您主動匯出的備份</h3>
              <p>
                當您使用備份或分享功能時，App 會建立包含個案紀錄的 JSON 檔案，
                並開啟裝置的系統分享介面。檔案是否傳送至雲端硬碟、通訊軟體、電子郵件或其他目的地，
                完全取決於您的選擇；選定服務後，其資料處理將適用該服務的隱私權政策。
              </p>
              <h3>安全措施</h3>
              <p>
                我們以最少資料與本機儲存為原則。由於任何儲存方式皆無法保證絕對安全，
                建議您啟用裝置密碼、生物辨識及系統更新，並避免將未加密備份傳送給未獲授權的人員。
              </p>
            </div>
          </section>

          <section id="third-party" className="policy-section">
            <div className="section-number">05</div>
            <div>
              <p className="section-kicker">外部服務</p>
              <h2>權限與第三方服務</h2>
              <div className="service-table" role="table" aria-label="權限與用途">
                <div className="service-row service-head" role="row">
                  <span role="columnheader">功能或服務</span>
                  <span role="columnheader">用途與資料處理</span>
                </div>
                <div className="service-row" role="row">
                  <strong role="cell">通知權限</strong>
                  <span role="cell">用於在您的裝置上顯示案件追蹤提醒。您可隨時於系統設定關閉。</span>
                </div>
                <div className="service-row" role="row">
                  <strong role="cell">檔案與分享功能</strong>
                  <span role="cell">用於選取備份檔及將備份交由您選擇的 App 或服務處理。</span>
                </div>
                <div className="service-row" role="row">
                  <strong role="cell">Google／Apple 登入</strong>
                  <span role="cell">若未來啟用，驗證程序由相應服務提供；App 僅使用登入所需的基本帳號資料。</span>
                </div>
                <div className="service-row" role="row">
                  <strong role="cell">政府長照平台連結</strong>
                  <span role="cell">App 可能開啟外部網站；離開 App 後即適用該網站的政策。</span>
                </div>
              </div>
              <p>
                App 不會在未經您操作的情況下，自動將個案資料上傳至我們的伺服器。
              </p>
            </div>
          </section>

          <section id="rights" className="policy-section">
            <div className="section-number">06</div>
            <div>
              <p className="section-kicker">您的選擇</p>
              <h2>資料管理與您的權利</h2>
              <p>您可透過 App 或裝置功能：</p>
              <ul>
                <li>檢視、更正或刪除個案與追蹤紀錄；</li>
                <li>在系統設定中撤回通知權限；</li>
                <li>自行管理、移動或刪除已匯出的備份檔；</li>
                <li>清除 App 資料或移除 App，以刪除裝置上的本機資料。</li>
              </ul>
              <p>
                若資料涉及受照護者或其他第三人，使用者有責任確保資料的蒐集、使用與刪除符合適用法令及所屬機構規範。
                如需協助，請透過下方信箱與我們聯絡。
              </p>
              <h3>兒童與未成年人</h3>
              <p>
                本 App 是提供長照服務與個案管理使用的工具，並非以兒童為主要使用者。
                未成年人如需使用，應由法定代理人或具適當權限之人指導並同意。
              </p>
              <h3>政策更新</h3>
              <p>
                因功能、法令或服務調整，本政策可能更新。重大變更將透過本頁、App 更新說明或其他適當方式公告，
                並於頁首標示新的生效日期。
              </p>
            </div>
          </section>

          <section id="contact" className="policy-section contact-section">
            <div className="section-number">07</div>
            <div>
              <p className="section-kicker">聯絡方式</p>
              <h2>對隱私有任何疑問？</h2>
              <p>
                若您對本政策、資料處理或資料權利有任何問題，歡迎來信。
                為保障個案隱私，請勿在電子郵件中直接附上身分證字號或完整個案紀錄。
              </p>
              <a className="email-card" href="mailto:alexsystem995@gmail.com">
                <span>
                  <small>隱私與障礙申告信箱</small>
                  <strong>alexsystem995@gmail.com</strong>
                </span>
                <span className="email-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        </article>
      </div>

      <footer>
        <div>
          <strong>長照個管系統</strong>
          <span>專業照護・用心陪伴</span>
        </div>
        <p>© 2026 Long-Term Care Manager. All rights reserved.</p>
      </footer>
    </main>
  );
}
