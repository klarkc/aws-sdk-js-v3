import { __extends } from "tslib";
import { CreateAccessPreviewRequest, CreateAccessPreviewResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAccessPreviewCommand,
  serializeAws_restJson1CreateAccessPreviewCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an access preview that allows you to preview Access Analyzer findings for your resource
 *          before deploying resource permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreateAccessPreviewCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreateAccessPreviewCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new CreateAccessPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessPreviewCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPreviewCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAccessPreviewCommand = /** @class */ (function (_super) {
  __extends(CreateAccessPreviewCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateAccessPreviewCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  CreateAccessPreviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "CreateAccessPreviewCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateAccessPreviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccessPreviewResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateAccessPreviewCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateAccessPreviewCommand(input, context);
  };
  CreateAccessPreviewCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateAccessPreviewCommand(output, context);
  };
  return CreateAccessPreviewCommand;
})($Command);
export { CreateAccessPreviewCommand };
//# sourceMappingURL=CreateAccessPreviewCommand.js.map
