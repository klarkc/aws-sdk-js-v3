"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatisticsCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the count, average, sum, minimum, maximum, sum of squares, variance,
 *       and standard deviation for the specified aggregated field. If the aggregation field is of type
 *       <code>String</code>, only the count statistic is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetStatisticsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetStatisticsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetStatisticsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetStatisticsCommand extends smithy_client_1.Command {
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
        const clientName = "IoTClient";
        const commandName = "GetStatisticsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.GetStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.GetStatisticsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetStatisticsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetStatisticsCommand(output, context);
    }
}
exports.GetStatisticsCommand = GetStatisticsCommand;
//# sourceMappingURL=GetStatisticsCommand.js.map