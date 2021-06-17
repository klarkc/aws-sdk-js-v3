"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTimeSeriesServiceStatisticsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Get an aggregation of service statistics defined by a specific time
 *             range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetTimeSeriesServiceStatisticsCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetTimeSeriesServiceStatisticsCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetTimeSeriesServiceStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTimeSeriesServiceStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetTimeSeriesServiceStatisticsCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetTimeSeriesServiceStatisticsCommand extends smithy_client_1.Command {
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
        const clientName = "XRayClient";
        const commandName = "GetTimeSeriesServiceStatisticsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetTimeSeriesServiceStatisticsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetTimeSeriesServiceStatisticsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand(output, context);
    }
}
exports.GetTimeSeriesServiceStatisticsCommand = GetTimeSeriesServiceStatisticsCommand;
//# sourceMappingURL=GetTimeSeriesServiceStatisticsCommand.js.map