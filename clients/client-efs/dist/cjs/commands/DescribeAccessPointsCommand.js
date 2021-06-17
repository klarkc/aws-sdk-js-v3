"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAccessPointsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the description of a specific Amazon EFS access point if the <code>AccessPointId</code> is provided.
 *       If you provide an EFS <code>FileSystemId</code>, it returns descriptions of all access points for that file system.
 *       You can provide either an <code>AccessPointId</code> or a <code>FileSystemId</code> in the request, but not both. </p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DescribeAccessPoints</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeAccessPointsCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeAccessPointsCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeAccessPointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccessPointsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessPointsCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAccessPointsCommand extends smithy_client_1.Command {
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
        const clientName = "EFSClient";
        const commandName = "DescribeAccessPointsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeAccessPointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeAccessPointsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1DescribeAccessPointsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1DescribeAccessPointsCommand(output, context);
    }
}
exports.DescribeAccessPointsCommand = DescribeAccessPointsCommand;
//# sourceMappingURL=DescribeAccessPointsCommand.js.map