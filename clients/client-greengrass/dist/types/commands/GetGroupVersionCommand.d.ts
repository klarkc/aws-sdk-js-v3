import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupVersionRequest, GetGroupVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetGroupVersionCommandInput extends GetGroupVersionRequest {
}
export interface GetGroupVersionCommandOutput extends GetGroupVersionResponse, __MetadataBearer {
}
/**
 * Retrieves information about a group version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetGroupVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupVersionCommandInput} for command's `input` shape.
 * @see {@link GetGroupVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGroupVersionCommand extends $Command<GetGroupVersionCommandInput, GetGroupVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetGroupVersionCommandInput;
    constructor(input: GetGroupVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGroupVersionCommandInput, GetGroupVersionCommandOutput>;
    private serialize;
    private deserialize;
}
