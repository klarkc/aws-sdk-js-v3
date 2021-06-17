import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeleteConditionalForwarderRequest, DeleteConditionalForwarderResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteConditionalForwarderCommandInput extends DeleteConditionalForwarderRequest {
}
export interface DeleteConditionalForwarderCommandOutput extends DeleteConditionalForwarderResult, __MetadataBearer {
}
/**
 * <p>Deletes a conditional forwarder that has been set up for your AWS directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeleteConditionalForwarderCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeleteConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeleteConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link DeleteConditionalForwarderCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteConditionalForwarderCommand extends $Command<DeleteConditionalForwarderCommandInput, DeleteConditionalForwarderCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeleteConditionalForwarderCommandInput;
    constructor(input: DeleteConditionalForwarderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConditionalForwarderCommandInput, DeleteConditionalForwarderCommandOutput>;
    private serialize;
    private deserialize;
}
