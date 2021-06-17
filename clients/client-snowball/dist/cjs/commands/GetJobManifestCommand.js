"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJobManifestCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a link to an Amazon S3 presigned URL for the manifest file associated with the
 *       specified <code>JobId</code> value. You can access the manifest file for up to 60 minutes
 *       after this request has been made. To access the manifest file after 60 minutes have passed,
 *       you'll have to make another call to the <code>GetJobManifest</code> action.</p>
 *
 *          <p>The manifest is an encrypted file that you can download after your job enters the
 *         <code>WithCustomer</code> status. The manifest is decrypted by using the
 *       <code>UnlockCode</code> code value, when you pass both values to the Snow device through the
 *       Snowball client when the client is started for the first time.</p>
 *
 *
 *          <p>As a best practice, we recommend that you don't save a copy of an
 *         <code>UnlockCode</code> value in the same location as the manifest file for that job. Saving
 *       these separately helps prevent unauthorized parties from gaining access to the Snow device
 *       associated with that job.</p>
 *
 *
 *          <p>The credentials of a given job, including its manifest file and unlock code, expire 360
 *       days after the job is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, GetJobManifestCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, GetJobManifestCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const command = new GetJobManifestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobManifestCommandInput} for command's `input` shape.
 * @see {@link GetJobManifestCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetJobManifestCommand extends smithy_client_1.Command {
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
        const clientName = "SnowballClient";
        const commandName = "GetJobManifestCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetJobManifestRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetJobManifestResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetJobManifestCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetJobManifestCommand(output, context);
    }
}
exports.GetJobManifestCommand = GetJobManifestCommand;
//# sourceMappingURL=GetJobManifestCommand.js.map