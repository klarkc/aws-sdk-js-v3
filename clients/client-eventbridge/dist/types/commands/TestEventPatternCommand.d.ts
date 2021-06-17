import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
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
 * import { EventBridgeClient, TestEventPatternCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, TestEventPatternCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new TestEventPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestEventPatternCommandInput} for command's `input` shape.
 * @see {@link TestEventPatternCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestEventPatternCommand extends $Command<TestEventPatternCommandInput, TestEventPatternCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: TestEventPatternCommandInput;
    constructor(input: TestEventPatternCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestEventPatternCommandInput, TestEventPatternCommandOutput>;
    private serialize;
    private deserialize;
}
