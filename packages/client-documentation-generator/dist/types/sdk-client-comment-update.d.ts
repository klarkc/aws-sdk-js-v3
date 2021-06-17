import { ConverterComponent } from "typedoc/dist/lib/converter/components";
/**
 * Best effort make the service docs markdown looks better.
 */
export declare class SdkClientCommentUpdatePlugin extends ConverterComponent {
    initialize(): void;
    private onDeclaration;
    /**
     * Update documentation block to exclude empty lines.
     */
    private cleanEmptyCommentLines;
}
