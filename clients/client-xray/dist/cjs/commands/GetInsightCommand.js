"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInsightCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the summary information of an insight. This includes impact to clients and
 *          root cause services, the top anomalous services, the category, the state of the insight,
 *          and the start and end time of the insight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetInsightCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetInsightCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const command = new GetInsightCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInsightCommandInput} for command's `input` shape.
 * @see {@link GetInsightCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetInsightCommand extends smithy_client_1.Command {
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
        const commandName = "GetInsightCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetInsightRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetInsightResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetInsightCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetInsightCommand(output, context);
    }
}
exports.GetInsightCommand = GetInsightCommand;
//# sourceMappingURL=GetInsightCommand.js.map