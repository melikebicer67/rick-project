import Head from "./head";

const Layout = ({ children }) => (
  <div>
    <Head />
    <div className="util__container">{children}</div>
    <style jsx global>{`
      article,
      aside,
      footer,
      header,
      hgroup,
      main,
      nav,
      section {
        display: block;
      }

      body {
        margin: 0;
        padding: 0;
      }

      .loading-box {
        width: 100%;
        height: 360px;
        background-color: #f5f5f5;
      }

      .util__flex {
        display: flex;
      }

      .util__flex-col {
        flex: 0 0 auto;
      }

      .util__flex-eq {
        flex: 1;
      }

      .util__container {
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
      }

      #nprogress .bar {
        background: #29d;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
      .leaflet-container {
        width: 100% !important;
        height: calc(50vh - 28px) !important;
      }
      .mobile-nav-btn {
        display: block;
        position: relative;
        width: 20px;
        height: 40px;
        padding-top: 0.3125rem;
        padding-bottom: 0.3125rem;
      }
      .mobile-nav-btn .icon,
      .mobile-nav-btn .icon:before,
      .mobile-nav-btn .icon:after {
        position: absolute;
        content: "";
        width: 20px;
        height: 2px;
        top: calc(50% - 1px);
        background: #000;
      }
      .mobile-nav-btn .icon:before {
        top: 5px;
      }
      .mobile-nav-btn .icon:after {
        top: auto;
        bottom: 5px;
      }

      @media screen and (min-width: 992px) {
        .mobile-nav-btn {
          display: none;
        }
      }

      .row-eq-height {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
      }

      .row-eq-height > [class*="col-"] {
        margin-bottom: 10px;
      }

      .row.small-gutter {
        margin-left: -5px;
        margin-right: -5px;
      }

      .row.small-gutter > [class*="col-"] {
        padding-left: 5px;
        padding-right: 5px;
      }

      .card {
        height: 100%;
      }

      .pull-left {
        float: left;
      }

      .pull-right {
        float: right;
      }

      .pull-center {
        float: center;
      }

      .rwd-table {
        margin: 1em 0;
        min-width: 300px;
      }
      .rwd-table tr {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
      }
      .rwd-table th {
        display: none;
      }
      .rwd-table tfoot th,
      .rwd-table td {
        display: block;
      }
      .rwd-table td:first-child {
        padding-top: 0.5em;
      }
      .rwd-table td:last-child {
        padding-bottom: 0.5em;
      }
      .rwd-table tfoot th:not(:first-child):before,
      .rwd-table td:before {
        content: attr(data-th) ": ";
        font-weight: bold;
        width: 6.5em;
        display: inline-block;
      }
      @media (min-width: 480px) {
        .rwd-table td:before {
          display: none;
        }
      }
      .rwd-table th,
      .rwd-table td {
        text-align: left;
      }
      @media (min-width: 480px) {
        .rwd-table th,
        .rwd-table td {
          display: table-cell !important;
          padding: 0.25em 0.5em;
        }
        .rwd-table th:first-child,
        .rwd-table td:first-child {
          padding-left: 0;
        }
        .rwd-table th:last-child,
        .rwd-table td:last-child {
          padding-right: 0;
        }
      }
      .rwd-table {
        background: #34495e;
        color: #fff;
        border-radius: 0.4em;
        overflow: hidden;
        width: 100%;
      }
      .rwd-table tr {
        border: none;
      }
      .rwd-table th,
      .rwd-table td {
        margin: 0.5em 1em;
      }
      @media (min-width: 480px) {
        .rwd-table th,
        .rwd-table td {
          padding: 5px !important;
        }
        .rwd-table tbody td:not(:first-child),
        .rwd-table tfoot th:not(:first-child),
        .rwd-table thead th:not(:first-child) {
          text-align: right;
        }
      }
      .rwd-table th,
      .rwd-table td:before {
        color: #dd5;
      }

      @media screen and (max-width: 1300px) {
      }
    `}</style>
  </div>
);

export default Layout;
