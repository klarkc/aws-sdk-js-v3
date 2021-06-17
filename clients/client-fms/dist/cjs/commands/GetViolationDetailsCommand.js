"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetViolationDetailsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves violations for a resource based on the specified AWS Firewall Manager policy and AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetViolationDetailsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetViolationDetailsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetViolationDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetViolationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetViolationDetailsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetViolationDetailsCommand extends smithy_client_1.Command {
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
        const clientName = "FMSClient";
        const commandName = "GetViolationDetailsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetViolationDetailsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetViolationDetailsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetViolationDetailsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetViolationDetailsCommand(output, context);
    }
}
exports.GetViolationDetailsCommand = GetViolationDetailsCommand;
//# sourceMappingURL=GetViolationDetailsCommand.js.map