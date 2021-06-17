import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { ListDedicatedIpPoolsRequest, ListDedicatedIpPoolsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListDedicatedIpPoolsCommandInput extends ListDedicatedIpPoolsRequest {
}
export interface ListDedicatedIpPoolsCommandOutput extends ListDedicatedIpPoolsResponse, __MetadataBearer {
}
/**
 * <p>List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current
 *             AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListDedicatedIpPoolsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, ListDedicatedIpPoolsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new ListDedicatedIpPoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDedicatedIpPoolsCommandInput} for command's `input` shape.
 * @see {@link ListDedicatedIpPoolsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListDedicatedIpPoolsCommand extends $Command<ListDedicatedIpPoolsCommandInput, ListDedicatedIpPoolsCommandOutput, PinpointEmailClientResolvedConfig> {
    readonly input: ListDedicatedIpPoolsCommandInput;
    constructor(input: ListDedicatedIpPoolsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PinpointEmailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDedicatedIpPoolsCommandInput, ListDedicatedIpPoolsCommandOutput>;
    private serialize;
    private deserialize;
}
