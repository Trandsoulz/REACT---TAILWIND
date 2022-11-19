const SideBarIcon = ({ Icon, text }) => {
  return (
    <div className="sidebar-icon group">
      {Icon}
      <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
    </div>
  );
};

export default SideBarIcon;
