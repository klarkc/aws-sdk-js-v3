"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeStudioCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns details for the specified Amazon EMR Studio including ID, Name, VPC, Studio
 *          access URL, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DescribeStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStudioCommandInput} for command's `input` shape.
 * @see {@link DescribeStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeStudioCommand extends smithy_client_1.Command {
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
        const clientName = "EMRClient";
        const commandName = "DescribeStudioCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeStudioInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeStudioOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeStudioCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeStudioCommand(output, context);
    }
}
exports.DescribeStudioCommand = DescribeStudioCommand;
//# sourceMappingURL=DescribeStudioCommand.js.map