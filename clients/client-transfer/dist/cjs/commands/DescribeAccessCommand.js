"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAccessCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the access that is assigned to the specific file transfer protocol-enabled
 *       server, as identified by its <code>ServerId</code> property and its
 *       <code>ExternalID</code>.</p>
 *
 *          <p>The response from this call returns the properties of the access that is associated with
 *       the <code>ServerId</code> value that was specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeAccessCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeAccessCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccessCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAccessCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeAccessCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeAccessRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeAccessResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeAccessCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeAccessCommand(output, context);
    }
}
exports.DescribeAccessCommand = DescribeAccessCommand;
//# sourceMappingURL=DescribeAccessCommand.js.map