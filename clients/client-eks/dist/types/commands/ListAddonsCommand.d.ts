import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListAddonsRequest, ListAddonsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAddonsCommandInput extends ListAddonsRequest {
}
export interface ListAddonsCommandOutput extends ListAddonsResponse, __MetadataBearer {
}
/**
 * <p>Lists the available add-ons.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListAddonsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListAddonsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListAddonsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAddonsCommandInput} for command's `input` shape.
 * @see {@link ListAddonsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAddonsCommand extends $Command<ListAddonsCommandInput, ListAddonsCommandOutput, EKSClientResolvedConfig> {
    readonly input: ListAddonsCommandInput;
    constructor(input: ListAddonsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAddonsCommandInput, ListAddonsCommandOutput>;
    private serialize;
    private deserialize;
}
