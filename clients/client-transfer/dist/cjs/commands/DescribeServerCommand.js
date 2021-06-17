"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeServerCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes a file transfer protocol-enabled server that you specify by passing the
 *         <code>ServerId</code> parameter.</p>
 *
 *          <p>The response contains a description of a server's properties. When you set
 *         <code>EndpointType</code> to VPC, the response will contain the
 *       <code>EndpointDetails</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServerCommandInput} for command's `input` shape.
 * @see {@link DescribeServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeServerCommand extends smithy_client_1.Command {
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
        const clientName = "TransferClient";
        const commandName = "DescribeServerCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeServerResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeServerCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeServerCommand(output, context);
    }
}
exports.DescribeServerCommand = DescribeServerCommand;
//# sourceMappingURL=DescribeServerCommand.js.map