import { RendererComponent } from "typedoc/dist/lib/output/components";
import { RendererEvent } from "typedoc/dist/lib/output/events";
export declare class SdkClientRemoveNavigatorPlugin extends RendererComponent {
    private navigationPlugin;
    initialize(): void;
    onRenderedBegin(event: RendererEvent): void;
}
