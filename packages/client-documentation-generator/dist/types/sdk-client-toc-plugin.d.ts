import { Reflection } from "typedoc/dist/lib/models/reflections";
import { RendererComponent } from "typedoc/dist/lib/output/components";
import { NavigationItem } from "typedoc/dist/lib/output/models/NavigationItem";
/**
 * Group the ToC for easier observability.
 */
export declare class SdkClientTocPlugin extends RendererComponent {
    private commandsNavigationItem?;
    private clientsNavigationItem?;
    private paginatorsNavigationItem?;
    private waitersNavigationItem?;
    private clientDir?;
    initialize(): void;
    /**
     * Generates a table of contents for a page.
     * @param page Contains project details and contextual data about the page being rendered.
     */
    private onRendererBeginPage;
    private belongsToClientPackage;
    private isClient;
    private isCommand;
    private isPaginator;
    private isInputOrOutput;
    private isWaiter;
    /**
     * Create a toc navigation item structure.
     *
     * @param model   The models whose children should be written to the toc.
     * @param trail   Defines the active trail of expanded toc entries.
     * @param parent  The parent [[NavigationItem]] the toc should be appended to.
     * @param restriction  The restricted table of contents.
     */
    buildToc(model: Reflection, trail: Reflection[], parent: NavigationItem, restriction?: string[]): void;
    private loadClientDir;
}
