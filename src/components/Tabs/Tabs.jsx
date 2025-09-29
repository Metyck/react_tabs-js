export const Tabs = ({ tabs, activeTab, onTabSelected }) => {
  return (
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
  );
};
