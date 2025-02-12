import MenuList from "./MenuList";
const TreeView = ({ menuData = [] }) => {
  return (
    <section className="flex flex-col w-full min-h-[100vh] padding-desktop max-lg:padding-tablet max-sm:padding-mobile items-start overflow-x-auto justify-start">
      <main>
        <MenuList list={menuData} />
      </main>
    </section>
  );
};

export default TreeView;
