import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#project">Project</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Contact</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Resume</a>
        </li>
      </ul>
    </div>
  );
}
