"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAppValidationOutputCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves output from validating an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GetAppValidationOutputCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GetAppValidationOutputCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new GetAppValidationOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppValidationOutputCommandInput} for command's `input` shape.
 * @see {@link GetAppValidationOutputCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetAppValidationOutputCommand extends smithy_client_1.Command {
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
        const clientName = "SMSClient";
        const commandName = "GetAppValidationOutputCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetAppValidationOutputRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetAppValidationOutputResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetAppValidationOutputCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetAppValidationOutputCommand(output, context);
    }
}
exports.GetAppValidationOutputCommand = GetAppValidationOutputCommand;
//# sourceMappingURL=GetAppValidationOutputCommand.js.map