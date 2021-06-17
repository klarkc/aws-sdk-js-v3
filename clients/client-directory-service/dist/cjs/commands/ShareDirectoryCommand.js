"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareDirectoryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Shares a specified directory (<code>DirectoryId</code>) in your AWS account (directory
 *       owner) with another AWS account (directory consumer). With this operation you can use your
 *       directory from any AWS account and from any Amazon VPC within an AWS Region.</p>
 *          <p>When you share your AWS Managed Microsoft AD directory, AWS Directory Service creates a
 *       shared directory in the directory consumer account. This shared directory contains the
 *       metadata to provide access to the directory within the directory owner account. The shared
 *       directory is visible in all VPCs in the directory consumer account.</p>
 *          <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be
 *       shared between AWS accounts inside the same AWS organization (<code>ORGANIZATIONS</code>). It
 *       also determines whether you can share the directory with any other AWS account either inside
 *       or outside of the organization (<code>HANDSHAKE</code>).</p>
 *          <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called,
 *       which sends a directory sharing request to the directory consumer. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ShareDirectoryCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ShareDirectoryCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new ShareDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ShareDirectoryCommandInput} for command's `input` shape.
 * @see {@link ShareDirectoryCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ShareDirectoryCommand extends smithy_client_1.Command {
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
        const clientName = "DirectoryServiceClient";
        const commandName = "ShareDirectoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ShareDirectoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ShareDirectoryResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ShareDirectoryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ShareDirectoryCommand(output, context);
    }
}
exports.ShareDirectoryCommand = ShareDirectoryCommand;
//# sourceMappingURL=ShareDirectoryCommand.js.map