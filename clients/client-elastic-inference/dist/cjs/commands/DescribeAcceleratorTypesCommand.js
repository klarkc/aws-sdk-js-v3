"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAcceleratorTypesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             Describes the accelerator types available in a given region, as well as their characteristics, such as memory and throughput.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticInferenceClient, DescribeAcceleratorTypesCommand } from "@aws-sdk/client-elastic-inference"; // ES Modules import
 * // const { ElasticInferenceClient, DescribeAcceleratorTypesCommand } = require("@aws-sdk/client-elastic-inference"); // CommonJS import
 * const client = new ElasticInferenceClient(config);
 * const command = new DescribeAcceleratorTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAcceleratorTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAcceleratorTypesCommandOutput} for command's `response` shape.
 * @see {@link ElasticInferenceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAcceleratorTypesCommand extends smithy_client_1.Command {
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
        const clientName = "ElasticInferenceClient";
        const commandName = "DescribeAcceleratorTypesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeAcceleratorTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeAcceleratorTypesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeAcceleratorTypesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeAcceleratorTypesCommand(output, context);
    }
}
exports.DescribeAcceleratorTypesCommand = DescribeAcceleratorTypesCommand;
//# sourceMappingURL=DescribeAcceleratorTypesCommand.js.map