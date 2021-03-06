import { nlyPluginFactory } from "../../utils/plugins";
import { NlyControlSidebarContainer } from "./control-sidebar-container";
import { NlyControlSidebar } from "./control-sidebar";
import { NlyControlSidebarButton } from "./control-sidebar-button";

const controlSidebarPlugin = nlyPluginFactory({
  components: {
    NlyControlSidebarContainer,
    NlyControlSidebar,
    NlyControlSidebarButton
  }
});

export {
  controlSidebarPlugin,
  NlyControlSidebarContainer,
  NlyControlSidebar,
  NlyControlSidebarButton
};
