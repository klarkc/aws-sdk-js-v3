import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { UpdateConditionalForwarderRequest, UpdateConditionalForwarderResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateConditionalForwarderCommandInput extends UpdateConditionalForwarderRequest {
}
export interface UpdateConditionalForwarderCommandOutput extends UpdateConditionalForwarderResult, __MetadataBearer {
}
/**
 * <p>Updates a conditional forwarder that has been set up for your AWS directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateConditionalForwarderCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new UpdateConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link UpdateConditionalForwarderCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateConditionalForwarderCommand extends $Command<UpdateConditionalForwarderCommandInput, UpdateConditionalForwarderCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: UpdateConditionalForwarderCommandInput;
    constructor(input: UpdateConditionalForwarderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConditionalForwarderCommandInput, UpdateConditionalForwarderCommandOutput>;
    private serialize;
    private deserialize;
}
