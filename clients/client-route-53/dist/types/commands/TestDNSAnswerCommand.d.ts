import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { TestDNSAnswerRequest, TestDNSAnswerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TestDNSAnswerCommandInput extends TestDNSAnswerRequest {
}
export interface TestDNSAnswerCommandOutput extends TestDNSAnswerResponse, __MetadataBearer {
}
/**
 * <p>Gets the value that Amazon Route 53 returns in response to a DNS request for a specified record name and type. You can optionally specify
 * 			the IP address of a DNS resolver, an EDNS0 client subnet IP address, and a subnet mask. </p>
 * 		       <p>This call only supports querying public hosted zones.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, TestDNSAnswerCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, TestDNSAnswerCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new TestDNSAnswerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestDNSAnswerCommandInput} for command's `input` shape.
 * @see {@link TestDNSAnswerCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TestDNSAnswerCommand extends $Command<TestDNSAnswerCommandInput, TestDNSAnswerCommandOutput, Route53ClientResolvedConfig> {
    readonly input: TestDNSAnswerCommandInput;
    constructor(input: TestDNSAnswerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestDNSAnswerCommandInput, TestDNSAnswerCommandOutput>;
    private serialize;
    private deserialize;
}
