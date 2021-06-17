import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateQualificationTypeRequest, CreateQualificationTypeResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateQualificationTypeCommandInput extends CreateQualificationTypeRequest {
}
export interface CreateQualificationTypeCommandOutput extends CreateQualificationTypeResponse, __MetadataBearer {
}
/**
 * <p>
 *             The
 *             <code>CreateQualificationType</code>
 *             operation creates a new Qualification type, which is represented by a
 *             <code>QualificationType</code>
 *             data structure.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateQualificationTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateQualificationTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateQualificationTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateQualificationTypeCommandInput} for command's `input` shape.
 * @see {@link CreateQualificationTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateQualificationTypeCommand extends $Command<CreateQualificationTypeCommandInput, CreateQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: CreateQualificationTypeCommandInput;
    constructor(input: CreateQualificationTypeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateQualificationTypeCommandInput, CreateQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
