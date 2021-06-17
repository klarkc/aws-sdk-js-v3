"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopLoggingCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Suspends the recording of AWS API calls and log file delivery for the specified trail.
 *          Under most circumstances, there is no need to use this action. You can update a trail
 *          without stopping it first. This action is the only way to stop recording. For a trail
 *          enabled in all regions, this operation must be called from the region in which the trail
 *          was created, or an <code>InvalidHomeRegionException</code> will occur. This operation
 *          cannot be called on the shadow trails (replicated trails in other regions) of a trail
 *          enabled in all regions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StopLoggingCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StopLoggingCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new StopLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopLoggingCommandInput} for command's `input` shape.
 * @see {@link StopLoggingCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class StopLoggingCommand extends smithy_client_1.Command {
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
        const clientName = "CloudTrailClient";
        const commandName = "StopLoggingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.StopLoggingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.StopLoggingResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1StopLoggingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1StopLoggingCommand(output, context);
    }
}
exports.StopLoggingCommand = StopLoggingCommand;
//# sourceMappingURL=StopLoggingCommand.js.map