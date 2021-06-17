import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { DescribeBrokerRequest, DescribeBrokerResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeBrokerCommandInput extends DescribeBrokerRequest {
}
export interface DescribeBrokerCommandOutput extends DescribeBrokerResponse, __MetadataBearer {
}
/**
 * Returns information about the specified broker.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new DescribeBrokerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBrokerCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeBrokerCommand extends $Command<DescribeBrokerCommandInput, DescribeBrokerCommandOutput, MqClientResolvedConfig> {
    readonly input: DescribeBrokerCommandInput;
    constructor(input: DescribeBrokerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MqClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBrokerCommandInput, DescribeBrokerCommandOutput>;
    private serialize;
    private deserialize;
}
