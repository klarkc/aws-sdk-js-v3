"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFolderPathCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the path information (the hierarchy from the root folder) for the
 *             specified folder.</p>
 *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 *             requested folder and only includes the IDs of the parent folders in the path. You can
 *             limit the maximum number of levels. You can also request the parent folder
 *             names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetFolderPathCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetFolderPathCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetFolderPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFolderPathCommandInput} for command's `input` shape.
 * @see {@link GetFolderPathCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetFolderPathCommand extends smithy_client_1.Command {
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
        const clientName = "WorkDocsClient";
        const commandName = "GetFolderPathCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetFolderPathRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetFolderPathResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1GetFolderPathCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1GetFolderPathCommand(output, context);
    }
}
exports.GetFolderPathCommand = GetFolderPathCommand;
//# sourceMappingURL=GetFolderPathCommand.js.map