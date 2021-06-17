import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { GetActionRequest, GetActionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetActionCommandInput extends GetActionRequest {
}
export interface GetActionCommandOutput extends GetActionResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the specified AWS FIS action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetActionCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetActionCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new GetActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetActionCommandInput} for command's `input` shape.
 * @see {@link GetActionCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetActionCommand extends $Command<GetActionCommandInput, GetActionCommandOutput, FisClientResolvedConfig> {
    readonly input: GetActionCommandInput;
    constructor(input: GetActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetActionCommandInput, GetActionCommandOutput>;
    private serialize;
    private deserialize;
}
