import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { SwapEnvironmentCNAMEsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SwapEnvironmentCNAMEsCommandInput extends SwapEnvironmentCNAMEsMessage {
}
export interface SwapEnvironmentCNAMEsCommandOutput extends __MetadataBearer {
}
/**
 * <p>Swaps the CNAMEs of two environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, SwapEnvironmentCNAMEsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, SwapEnvironmentCNAMEsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new SwapEnvironmentCNAMEsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SwapEnvironmentCNAMEsCommandInput} for command's `input` shape.
 * @see {@link SwapEnvironmentCNAMEsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SwapEnvironmentCNAMEsCommand extends $Command<SwapEnvironmentCNAMEsCommandInput, SwapEnvironmentCNAMEsCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: SwapEnvironmentCNAMEsCommandInput;
    constructor(input: SwapEnvironmentCNAMEsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SwapEnvironmentCNAMEsCommandInput, SwapEnvironmentCNAMEsCommandOutput>;
    private serialize;
    private deserialize;
}
