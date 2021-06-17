import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { GetResourceSharesRequest, GetResourceSharesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetResourceSharesCommandInput extends GetResourceSharesRequest {
}
export interface GetResourceSharesCommandOutput extends GetResourceSharesResponse, __MetadataBearer {
}
/**
 * <p>Gets the resource shares that you own or the resource shares that are shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, GetResourceSharesCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, GetResourceSharesCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new GetResourceSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceSharesCommandInput} for command's `input` shape.
 * @see {@link GetResourceSharesCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetResourceSharesCommand extends $Command<GetResourceSharesCommandInput, GetResourceSharesCommandOutput, RAMClientResolvedConfig> {
    readonly input: GetResourceSharesCommandInput;
    constructor(input: GetResourceSharesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourceSharesCommandInput, GetResourceSharesCommandOutput>;
    private serialize;
    private deserialize;
}
