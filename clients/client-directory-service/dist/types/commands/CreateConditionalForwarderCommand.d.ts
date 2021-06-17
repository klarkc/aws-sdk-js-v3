import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateConditionalForwarderRequest, CreateConditionalForwarderResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConditionalForwarderCommandInput extends CreateConditionalForwarderRequest {
}
export interface CreateConditionalForwarderCommandOutput extends CreateConditionalForwarderResult, __MetadataBearer {
}
/**
 * <p>Creates a conditional forwarder associated with your AWS directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateConditionalForwarderCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateConditionalForwarderCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateConditionalForwarderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConditionalForwarderCommandInput} for command's `input` shape.
 * @see {@link CreateConditionalForwarderCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConditionalForwarderCommand extends $Command<CreateConditionalForwarderCommandInput, CreateConditionalForwarderCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateConditionalForwarderCommandInput;
    constructor(input: CreateConditionalForwarderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConditionalForwarderCommandInput, CreateConditionalForwarderCommandOutput>;
    private serialize;
    private deserialize;
}
