export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${tabs.find(tab => tab.id === activeTabId)?.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-key={tab.id}
                className={tab.id === activeTab.id ? 'is-active' : ''}
                data-cy="Tab"
                onClick={event => {
                  const tabId = event.currentTarget.dataset.key;

                  if (tabId !== activeTab.id) {
                    onTabSelected(tabId);
                  }
                }}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tab.id === activeTab.id)?.content}
        </div>
      </div>
    </div>
  );
};
