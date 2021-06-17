"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeUpdateCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns descriptive information about an update against your Amazon EKS cluster or
 *             associated managed node group.</p>
 *         <p>When the status of the update is <code>Succeeded</code>, the update is complete. If an
 *             update fails, the status is <code>Failed</code>, and an error detail explains the reason
 *             for the failure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeUpdateCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeUpdateCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new DescribeUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeUpdateCommandInput} for command's `input` shape.
 * @see {@link DescribeUpdateCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeUpdateCommand extends smithy_client_1.Command {
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
        const clientName = "EKSClient";
        const commandName = "DescribeUpdateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeUpdateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeUpdateResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeUpdateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeUpdateCommand(output, context);
    }
}
exports.DescribeUpdateCommand = DescribeUpdateCommand;
//# sourceMappingURL=DescribeUpdateCommand.js.map