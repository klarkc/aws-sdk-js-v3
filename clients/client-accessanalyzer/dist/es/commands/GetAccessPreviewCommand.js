import { __extends } from "tslib";
import { GetAccessPreviewRequest, GetAccessPreviewResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetAccessPreviewCommand,
  serializeAws_restJson1GetAccessPreviewCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about an access preview for the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetAccessPreviewCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetAccessPreviewCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const command = new GetAccessPreviewCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessPreviewCommandInput} for command's `input` shape.
 * @see {@link GetAccessPreviewCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccessPreviewCommand = /** @class */ (function (_super) {
  __extends(GetAccessPreviewCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetAccessPreviewCommand(input) {
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
  GetAccessPreviewCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AccessAnalyzerClient";
    var commandName = "GetAccessPreviewCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetAccessPreviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccessPreviewResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetAccessPreviewCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetAccessPreviewCommand(input, context);
  };
  GetAccessPreviewCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetAccessPreviewCommand(output, context);
  };
  return GetAccessPreviewCommand;
})($Command);
export { GetAccessPreviewCommand };
//# sourceMappingURL=GetAccessPreviewCommand.js.map
