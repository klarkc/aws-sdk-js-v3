"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeDomainEndpointOptionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeDomainEndpointOptionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeDomainEndpointOptionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new DescribeDomainEndpointOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDomainEndpointOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainEndpointOptionsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeDomainEndpointOptionsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "CloudSearchClient";
        const commandName = "DescribeDomainEndpointOptionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeDomainEndpointOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeDomainEndpointOptionsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeDomainEndpointOptionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeDomainEndpointOptionsCommand(output, context);
    }
}
exports.DescribeDomainEndpointOptionsCommand = DescribeDomainEndpointOptionsCommand;
//# sourceMappingURL=DescribeDomainEndpointOptionsCommand.js.map