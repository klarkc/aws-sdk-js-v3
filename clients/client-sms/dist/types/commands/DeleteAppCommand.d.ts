import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteAppRequest, DeleteAppResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAppCommandInput extends DeleteAppRequest {
}
export interface DeleteAppCommandOutput extends DeleteAppResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified application. Optionally deletes the launched stack associated with
 *             the application and all AWS SMS replication jobs for servers in the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, DeleteAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, DeleteAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new DeleteAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppCommandInput} for command's `input` shape.
 * @see {@link DeleteAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAppCommand extends $Command<DeleteAppCommandInput, DeleteAppCommandOutput, SMSClientResolvedConfig> {
    readonly input: DeleteAppCommandInput;
    constructor(input: DeleteAppCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAppCommandInput, DeleteAppCommandOutput>;
    private serialize;
    private deserialize;
}
