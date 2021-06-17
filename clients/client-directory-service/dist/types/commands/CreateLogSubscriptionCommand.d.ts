import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateLogSubscriptionRequest, CreateLogSubscriptionResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLogSubscriptionCommandInput extends CreateLogSubscriptionRequest {
}
export interface CreateLogSubscriptionCommandOutput extends CreateLogSubscriptionResult, __MetadataBearer {
}
/**
 * <p>Creates a subscription to forward real-time Directory Service domain controller security
 *       logs to the specified Amazon CloudWatch log group in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateLogSubscriptionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateLogSubscriptionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateLogSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLogSubscriptionCommand extends $Command<CreateLogSubscriptionCommandInput, CreateLogSubscriptionCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateLogSubscriptionCommandInput;
    constructor(input: CreateLogSubscriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLogSubscriptionCommandInput, CreateLogSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
