import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateConfigurationSetEventDestinationRequest, CreateConfigurationSetEventDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateConfigurationSetEventDestinationCommandInput extends CreateConfigurationSetEventDestinationRequest {
}
export interface CreateConfigurationSetEventDestinationCommandOutput extends CreateConfigurationSetEventDestinationResponse, __MetadataBearer {
}
/**
 * <p>Creates a configuration set event destination.</p>
 *         <note>
 *             <p>When you create or update an event destination, you must provide one, and only
 *                 one, destination. The destination can be CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS).</p>
 *         </note>
 *         <p>An event destination is the AWS service to which Amazon SES publishes the email sending
 *             events associated with a configuration set. For information about using configuration
 *             sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateConfigurationSetEventDestinationCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new CreateConfigurationSetEventDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConfigurationSetEventDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationSetEventDestinationCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateConfigurationSetEventDestinationCommand extends $Command<CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateConfigurationSetEventDestinationCommandInput;
    constructor(input: CreateConfigurationSetEventDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
