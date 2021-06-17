import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { ListUpdatesRequest, ListUpdatesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListUpdatesCommandInput extends ListUpdatesRequest {
}
export interface ListUpdatesCommandOutput extends ListUpdatesResponse, __MetadataBearer {
}
/**
 * <p>Lists the updates associated with an Amazon EKS cluster or managed node group in your AWS
 *             account, in the specified Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListUpdatesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListUpdatesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListUpdatesCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListUpdatesCommand extends $Command<ListUpdatesCommandInput, ListUpdatesCommandOutput, EKSClientResolvedConfig> {
    readonly input: ListUpdatesCommandInput;
    constructor(input: ListUpdatesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EKSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUpdatesCommandInput, ListUpdatesCommandOutput>;
    private serialize;
    private deserialize;
}
