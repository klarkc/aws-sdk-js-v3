import { RendererComponent } from "typedoc/dist/lib/output/components";
import { RendererEvent } from "typedoc/dist/lib/output/events";
/**
 * Correct the package name in the navigator.
 */
export declare class SdkClientRenameProjectPlugin extends RendererComponent {
    private projectName;
    initialize(): void;
    onRenderedBegin(event: RendererEvent): void;
}
