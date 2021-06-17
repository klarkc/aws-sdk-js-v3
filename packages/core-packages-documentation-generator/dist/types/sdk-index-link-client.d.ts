import { RendererComponent } from "typedoc/dist/lib/output/components";
import { PageEvent } from "typedoc/dist/lib/output/events";
export declare class SdkIndexLinkClientPlugin extends RendererComponent {
    readonly out: string;
    /**
     * The path pattern denotes the location of individual service client doc.
     * "{{CLIENT}}" will be replaced with the client name.
     * For example: `path/{{CLIENT}}/docs` will target s3 docs at `path/client-s3/docs`
     */
    readonly clientDocs: string;
    initialize(): void;
    onPageBegin(page: PageEvent): void;
    /**
     * Group navigation in Client, Packages and Libraries sections. It will update the
     * supplied navigation object;
     */
    private groupNavigation;
    private isGrouped;
    private isClient;
}
