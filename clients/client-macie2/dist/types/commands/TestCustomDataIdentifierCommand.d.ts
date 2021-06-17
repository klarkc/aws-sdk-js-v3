import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { TestCustomDataIdentifierRequest, TestCustomDataIdentifierResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestCustomDataIdentifierCommandInput extends TestCustomDataIdentifierRequest {
}
export interface TestCustomDataIdentifierCommandOutput extends TestCustomDataIdentifierResponse, __MetadataBearer {
}
/**
 * <p>Tests a custom data identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, TestCustomDataIdentifierCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, TestCustomDataIdentifierCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new TestCustomDataIdentifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestCustomDataIdentifierCommandInput} for command's `input` shape.
 * @see {@link TestCustomDataIdentifierCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestCustomDataIdentifierCommand extends $Command<TestCustomDataIdentifierCommandInput, TestCustomDataIdentifierCommandOutput, Macie2ClientResolvedConfig> {
    readonly input: TestCustomDataIdentifierCommandInput;
    constructor(input: TestCustomDataIdentifierCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Macie2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestCustomDataIdentifierCommandInput, TestCustomDataIdentifierCommandOutput>;
    private serialize;
    private deserialize;
}
