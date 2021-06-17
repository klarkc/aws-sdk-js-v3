import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DeregisterEventTopicRequest, DeregisterEventTopicResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterEventTopicCommandInput extends DeregisterEventTopicRequest {
}
export interface DeregisterEventTopicCommandOutput extends DeregisterEventTopicResult, __MetadataBearer {
}
/**
 * <p>Removes the specified directory as a publisher to the specified SNS topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeregisterEventTopicCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeregisterEventTopicCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeregisterEventTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterEventTopicCommandInput} for command's `input` shape.
 * @see {@link DeregisterEventTopicCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterEventTopicCommand extends $Command<DeregisterEventTopicCommandInput, DeregisterEventTopicCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DeregisterEventTopicCommandInput;
    constructor(input: DeregisterEventTopicCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterEventTopicCommandInput, DeregisterEventTopicCommandOutput>;
    private serialize;
    private deserialize;
}
