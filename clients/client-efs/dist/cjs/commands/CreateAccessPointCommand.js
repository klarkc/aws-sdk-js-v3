"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccessPointCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an EFS access point. An access point is an application-specific view into an EFS
 *       file system that applies an operating system user and group, and a file system path, to any
 *       file system request made through the access point. The operating system user and group
 *       override any identity information provided by the NFS client. The file system path is exposed
 *       as the access point's root directory. Applications using the access point can only access data
 *       in its own directory and below. To learn more, see <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a file system using EFS access
 *         points</a>.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, CreateAccessPointCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, CreateAccessPointCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new CreateAccessPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPointCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateAccessPointCommand extends smithy_client_1.Command {
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
        const commandName = "CreateAccessPointCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateAccessPointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.AccessPointDescription.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateAccessPointCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateAccessPointCommand(output, context);
    }
}
exports.CreateAccessPointCommand = CreateAccessPointCommand;
//# sourceMappingURL=CreateAccessPointCommand.js.map