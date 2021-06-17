import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { TestEventPatternRequest, TestEventPatternResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestEventPatternCommandInput extends TestEventPatternRequest {
}
export interface TestEventPatternCommandOutput extends TestEventPatternResponse, __MetadataBearer {
}
/**
 * <p>Tests whether the specified event pattern matches the provided event.</p>
 *          <p>Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs).
 *       However, EventBridge uses an exact match in event patterns and rules. Be sure to use the
 *       correct ARN characters when creating event patterns so that they match the ARN syntax in the
 *       event you want to match.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, TestEventPatternCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, TestEventPatternCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new TestEventPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestEventPatternCommandInput} for command's `input` shape.
 * @see {@link TestEventPatternCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestEventPatternCommand extends $Command<TestEventPatternCommandInput, TestEventPatternCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: TestEventPatternCommandInput;
    constructor(input: TestEventPatternCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestEventPatternCommandInput, TestEventPatternCommandOutput>;
    private serialize;
    private deserialize;
}
