import re
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

KEYWORDS = {
    'import', 'export', 'from', 'const', 'let', 'var', 'async', 'await', 
    'function', 'return', 'try', 'catch', 'if', 'else', 'typeof', 'new', 
    'throw', 'interface', 'type', 'declare', 'global', 'default', 'as'
}
TYPES = {
    'PrismaClient', 'Request', 'Response', 'User', 'UserRole', 'RegisterCredentials', 
    'Quiz', 'Question', 'QuizAttempt', 'AttemptResult', 'BloomTierScore', 'Boolean', 
    'Number', 'String', 'Record', 'Promise', 'Date', 'Buffer', 'Array', 'void', 'any'
}
LITERALS = {'true', 'false', 'null', 'undefined'}

# Colors
C_KEYWORD = RGBColor(147, 51, 234)   # Vibrant Purple
C_STRING = RGBColor(22, 163, 74)     # Emerald Green
C_COMMENT = RGBColor(100, 116, 139)  # Slate Gray
C_NUMBER = RGBColor(234, 88, 12)     # Amber / Orange
C_TYPE = RGBColor(13, 148, 136)      # Deep Teal
C_DEFAULT = RGBColor(30, 41, 59)     # Dark Slate / Charcoal

TOKEN_RE = re.compile(
    r'(?P<COMMENT>//.*$)|'
    r'(?P<STRING>"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`)|'
    r'(?P<NUMBER>\b\d+(?:\.\d+)?\b)|'
    r'(?P<WORD>\b[A-Za-z_$][A-Za-z0-9_$]*\b)|'
    r'(?P<OTHER>[^\sA-Za-z0-9_$]+|\s+)'
)

def add_syntax_runs(p, line):
    for m in TOKEN_RE.finditer(line):
        kind = m.lastgroup
        val = m.group()
        
        run = p.add_run(val)
        run.font.name = 'Consolas'
        run.font.size = Pt(8.5)
        
        if kind == 'COMMENT':
            run.font.color.rgb = C_COMMENT
            run.font.italic = True
        elif kind == 'STRING':
            run.font.color.rgb = C_STRING
        elif kind == 'NUMBER':
            run.font.color.rgb = C_NUMBER
            run.font.bold = True
        elif kind == 'WORD':
            if val in KEYWORDS:
                run.font.color.rgb = C_KEYWORD
                run.font.bold = True
            elif val in TYPES:
                run.font.color.rgb = C_TYPE
                run.font.bold = True
            elif val in LITERALS:
                run.font.color.rgb = C_NUMBER
                run.font.bold = True
            else:
                run.font.color.rgb = C_DEFAULT
        else:
            run.font.color.rgb = C_DEFAULT

print("Token syntax regex compiled successfully!")
